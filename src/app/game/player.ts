import * as p5 from "p5";
import Obstacle from "./obstacle";
import * as tf from '@tensorflow/tfjs'
import NeuralNetwork from "../neural_network_genetic_algorithm/neural-network";
export default class Player {

  /**
   * Property to indicante if the bird is still alive
   */
  isAlive: boolean = true;

  /**
   * Property to indicante where the bird is on the screen
   */
  x: number = 70

  /**
   * Property to indicante where the bird is on the screen
   */
  y: number = 0

  /**
   * gravity
   */
  gravity = 0.8;

  /**
  * upLift
  */
  upLift = -12;

  /**
   * velocity
   */
  velocity = 0;

  /**
  * score
  */
  score = 0

  /**
  * Instance of Neural Network
  */
  brain!: NeuralNetwork;

  /**
  * generation
  */
  generation: number = 0

  /**
   *
   * @param p
   * @param bird
   * @param ground
   * @param height
   */
  constructor(private p: p5, private bird: p5.Image, private ground: p5.Image, private height: number) {
    this.isAlive = true;
    this.y = (window.innerHeight / 2) - 170
    this.brain = new NeuralNetwork(16, 2, 2)
    // this.y = (window.innerHeight / 2) - 230
  }


  /**
   * Update the bird on screen
   * @param obstacles list with all obstacles
   */
  update(obstacles: Obstacle[]) {

    const sort = this.getNearObstacle(obstacles);
    let targetY = 0
    let targetX = 0
    if (sort?.targetX > this.x) {
      targetX = sort?.targetX - this.x
    } else {
      targetX = this.x - sort?.targetX
    }

    if (sort?.targetY < this.y) {
      targetY = sort?.targetY - this.y;
    } else {
      targetY = this.y - sort?.targetY;
    }

    this.fall(targetX, targetY);

    this.p.image(this.bird, this.x, this.y)

  }

  /**
   * function to go dowm the bird
   * @param targetX position
   * @param targetY position
   */
  private fall(targetX: number, targetY: number) {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    this.score = this.score - targetX - targetY;
  }

  /**
   *
   * @param obstacles
   * @returns
   */
  private getNearObstacle(obstacles: Obstacle[]) {
    const sort = obstacles.filter(obs => obs.x >= this.x + this.bird.width).sort((a, b) => {
      if (a.x < b.x) { return -1; }
      if (a.x > b.x) { return 1; }
      return 0;
    });
    return sort[0];
  }

  /**
   * Test if have a collision
   * @param obstacles
   * @returns
   */
  hits(obstacles: Obstacle[]) {
    const hasHit = false;
    const firstNear = obstacles.filter(obs => obs.x < this.x + this.bird.width).sort((a, b) => {
      if (a.x < b.x) { return -1; }
      if (a.x > b.x) { return 1; }
      return 0;
    })[0];

    if (
      (this.x + this.bird?.width > firstNear?.x &&
        this.x < firstNear.x + firstNear.image.width &&
        this.y + this.bird.height > firstNear.yBottom + 10)
      ||

      (this.x + this.bird?.width > firstNear?.x &&
        this.x < firstNear.x + firstNear.image.width &&
        this.y < firstNear.yBottom - 180)

    ) {
      this.isAlive = false;
    }

    return hasHit;
  }

  /**
   * Check if the bird is still on the scene
   */
  isOffScreen() {
    if (this.y + this.bird.height < 0 || this.y > this.height - this.ground.height) {
      this.isAlive = false;
    }
  }

  /**
   * Jump the Bird
   */
  jump() {
    this.velocity += this.upLift;
    this.velocity *= 0.9;
  }

  /**
   *
   * @param mutationRate
   */
  mutate(mutationRate: number) {
    // this.neuralNetwork.mutate(mutationRate)
    const model = this.brain.model; // Clone o modelo para evitar mutações diretas

    // Percorra todas as camadas do modelo
    model.layers.forEach((layer: any) => {
      // Obtenha os pesos da camada
      const weights = layer.getWeights();

      // Percorra cada matriz de pesos e adicione uma mutação
      const mutatedWeights = weights.map((weight: any) => {
        const shape = weight.shape;
        const values = weight.arraySync() as number[][]; // Certifique-se de que o dtype seja compatível

        for (let i = 0; i < shape[0]; i++) {
          for (let j = 0; j < shape[1]; j++) {
            if (Math.random() < mutationRate) {
              // Adicione uma pequena mutação ao peso
              const mutation = (Math.random() * 2 - 1) * 0.1; // Pequena mutação aleatória
              values[i][j] += mutation;
            }
          }
        }

        return tf.tensor(values, shape, 'float32');
      });

      // Defina os novos pesos mutados para a camada
      layer.setWeights(mutatedWeights);
    });

    // Defina o novo modelo mutado no indivíduo
    this.brain.model = model;
  }


  /**
   * Create a new weight for the next generation
   * @param cut where must be cutted
   * @param weights1
   * @param weights2
   * @returns the new weight
   */
  createNewWeight(cut: number, weights1: number[], weights2: number[]): number[] {
    const ret = [];
    const cut1 = weights1.slice(0, cut)
    const cut2 = weights2.slice(cut)
    ret.push(...cut1);
    ret.push(...cut2);
    return ret
  }

  /**
   * crossover
   * @param parent1
   * @param parent2
   * @returns
   */
  crossover(parent1: Player, parent2: Player): [Player, Player] {

    const child1 = new Player(this.p, this.bird, this.ground, this.height);
    const child2 = new Player(this.p, this.bird, this.ground, this.height);
    try {

      const parent1Model = parent1.brain.model;
      const parent2Model = parent2.brain.model;

      const childModel1 = tf.sequential();
      const childModel2 = tf.sequential();

      // Iterar pelas camadas dos pais
      parent1Model.layers.forEach((layer1, index) => {
        const layer2 = parent2Model.layers[index];


        if (layer1 && layer2) {

          const weights1 = layer1.getWeights();
          const weights2 = layer2.getWeights();

          const childWeights1: tf.Tensor[] = [];
          const childWeights2: tf.Tensor[] = [];


          for (let i = 0; i < weights1.length; i++) {
            const shape = weights1[i].shape
            const weight1 = Array.from(weights1[i].dataSync()) as number[];
            const weight2 = Array.from(weights2[i].dataSync()) as number[];
            const cut = Math.round(Math.random() * weight2.length)

            const childWeight1 = tf.cast(tf.tensor(this.createNewWeight(cut, weight1, weight2), shape), 'float32');
            const childWeight2 = tf.cast(tf.tensor(this.createNewWeight(cut, weight2, weight1), shape), 'float32');

            childWeights1.push(childWeight1);
            childWeights2.push(childWeight2);
          }

          childModel1.add(tf.layers.dense({
            units: (layer1 as any).units,
            inputShape: layer1.batchInputShape ? layer1.batchInputShape.slice(1) : undefined,
            activation: 'relu',

            weights: childWeights1,
          }));

          childModel2.add(tf.layers.dense({
            units: (layer2 as any).units,
            inputShape: layer2.batchInputShape ? layer2.batchInputShape.slice(1) : undefined,
            activation: 'relu',
            weights: childWeights2,
          }));
        }

      });

      child1.brain.model = childModel1;
      child1.generation = this.generation + 1;
      child2.brain.model = childModel2;
      child2.generation = this.generation + 1;

      return [child1, child2];
    } catch (error) {


      return [child1, child2];
    }
  }

  /**
   * "This function is responsible for calling the neural network and taking action based on the neural network's response."
   * @param obstacles
   */
  think(obstacles: Obstacle[]) {
    const input = [];
    const sort = obstacles.filter(obs => obs.targetX >= this.x).sort((a, b) => {
      if (a.x < b.x) { return -1; }
      if (a.x > b.x) { return 1; }
      return 0;
    })[0];

    input[0] = sort?.targetX - this.x;
    input[1] = sort?.targetY - this.y;
    console.log(input[0])
    const ret = this.brain.predictLabel(input, ['jump', 'no-jump'])

    if (ret === 'jump') {
      this.jump()
    }
  }
}
