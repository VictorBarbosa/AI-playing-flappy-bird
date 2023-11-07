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


  background!: Background;
  obstacles: Obstacle[] = [];
  population: Player[] = [];
  populationSize: number = 100;
  width = window.innerWidth - 40
  height = window.innerHeight - 110
  ga!: GeneticAlgorithm;
  upPipe!: p5.Image;
  downPipe!: p5.Image;

  get totalPopulation(): number {
    return this.ga.population.filter(pop => pop.isAlive).length
  }

  get currentGeneration(): number {
    return this.ga.population[0].generation
  }

  constructor() { }



  ngOnInit(): void {
    new p5(this.sketch.bind(this));
  }

  sketch(p: p5) {
    p.setup = () => this.setup(p);
    p.draw = () => this.draw(p);
  }

  setup(p: p5) {
    const bg = p.loadImage('assets/bg.png');
    const ground = p.loadImage('assets/ground.png');
    this.upPipe = p.loadImage('assets/pipeUp.png');
    this.downPipe = p.loadImage('assets/pipeDown.png');
    const bird = p.loadImage('assets/bird.png');

    this.background = new Background(p, bg, ground, this.width, this.height);

    this.initObstacles(p, this.upPipe, this.downPipe)
    this.ga = new GeneticAlgorithm(this.populationSize, p, bird, ground, this.height)
    // p.createCanvas(this.width, this.height, this.canvas.nativeElement)
    p.createCanvas(this.width, this.height, this.canvas.nativeElement)
  }

  initObstacles(p: p5, upPipe: p5.Image, downPipe: p5.Image) {
    this.obstacles = [];
    const space = 300
    for (let index = 0; index < 10; index++) {
      this.obstacles.push(new Obstacle(p, upPipe, downPipe, this.width, this.height, this.width + (space * index)));
    }
  }

  draw(p: p5) {
    p.background(111, 197, 206);
    this.background.drawBackground();
    this.obstacles.forEach(obs => {
      obs.draw();
      obs.isOffscreen(this.obstacles)
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
      this.initObstacles(p, this.upPipe, this.downPipe)
    }


    p.textSize(20)
    p.text(`Still Alive : ${this.totalPopulation}`, 100, 30)
    p.text(`Generation: ${this.currentGeneration}`, 100, 50)
    this.background.drawGround();
  }
}
