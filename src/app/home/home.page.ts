import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as p5 from 'p5'
import Background from '../game/background';
import Obstacle from '../game/obstacle';
import Player from '../game/player';

import GeneticAlgorithm from '../neural_network_genetic_algorithm/genetic-algorithm';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  /**
   * Canvas where project will be rended
   */
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>

  /**
   * Intance of Background
   */
  background!: Background;

  /**
   * List of with instance of Obstacles
   */
  obstacles: Obstacle[] = [];

  /**
 * List of with instance of Players
 */
  population: Player[] = [];

  /**
   * Variable with population size
   */
  populationSize: number = 100;

  /**
   * Canvas width size
   */
  width = window.innerWidth - 40

  /**
   * Canvas height size
   */
  height = window.innerHeight - 110

  /**
   * Instance of Algorithm genetic
   */
  ga!: GeneticAlgorithm;

  /**
    * Instance of upPipe
    */
  upPipe!: p5.Image;

  /**
    * Instance of downPipe
    */
  downPipe!: p5.Image;

  /**
   * Property to get the population still alive
   */
  get totalPopulation(): number {
    return this.ga.population.filter(pop => pop.isAlive).length
  }

  /**
   * Property with current generation
   */
  get currentGeneration(): number {
    return this.ga.population[0].generation
  }

  /**
   * Property to count how many pipes have passed.
   */
  private _scorePipes: number = 0;
  public get scorePipes(): number {
    return this._scorePipes;
  }
  public set scorePipes(v: number) {
    this._scorePipes = v;
  }

  /**
   * Ng Init create instance to P5
   */
  ngOnInit(): void {
    new p5(this.sketch.bind(this));
  }

  /**
   * sketch
   * @param p5 instance
   */
  sketch(p: p5) {
    p.setup = () => this.setup(p);
    p.draw = () => this.draw(p);
  }

  /**
   * setup
   * @param p5 instance
   */
  setup(p: p5) {
    const bg = p.loadImage('assets/bg.png');
    const ground = p.loadImage('assets/ground.png');
    this.upPipe = p.loadImage('assets/pipeUp.png');
    this.downPipe = p.loadImage('assets/pipeDown.png');
    const bird = p.loadImage('assets/bird.png');

    this.background = new Background(p, bg, ground, this.width, this.height);

    this.initObstacles(p, this.upPipe, this.downPipe)
    this.ga = new GeneticAlgorithm(this.populationSize, p, bird, ground, this.height)
    p.createCanvas(this.width, this.height, this.canvas.nativeElement)
  }

  /**
   * Create and recreate the pipes(obstacles)
   * @param p5 instance
   * @param upPipe instance
   * @param downPipe instance
   */
  initObstacles(p: p5, upPipe: p5.Image, downPipe: p5.Image) {
    this.obstacles = [];
    const space = 300
    for (let index = 0; index < 10; index++) {
      this.obstacles.push(new Obstacle(p, upPipe, downPipe, this.width, this.height, this.width + (space * index)));
    }
  }

  /**
   * Draw the scene
   * @param p5 instance
   */
  draw(p: p5) {
    p.background(111, 197, 206);
    this.background.drawBackground();
    this.obstacles.forEach(obs => {
      obs.draw();
      if (obs.isOffscreen(this.obstacles)) {
        this.scorePipes += 1
      }
    });

    const population = this.ga.population.filter(pop => pop.isAlive);
    if (population.length > 0) {

      population.forEach(pop => {
        pop.update(this.obstacles);
        pop.hits(this.obstacles);
        pop.isOffScreen();
        pop.think(this.obstacles)
      });
    } else {
      this.ga.generateNextGeneration(0.2, this.ga.population);
      this.initObstacles(p, this.upPipe, this.downPipe);
      this.scorePipes = 0
    }


    p.textSize(20)
    p.text(`Still Alive : ${this.totalPopulation}`, 10, 50)
    p.text(`Generation: ${this.currentGeneration}`, 10, 80)
    p.text(`Score (Pipe count): ${this.scorePipes}`, 10, 110)
    this.background.drawGround();
  }
}
