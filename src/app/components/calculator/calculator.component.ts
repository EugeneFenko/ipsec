import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  constructor(private _fb: FormBuilder) { }

  algoFormGroup: FormGroup;
  speedFormGroup: FormGroup;
  
  speed: number;
  selectedAlgorithm: number;
  allBits: number;
  timeResult: number;

  ngOnInit() {

    this.allBits = Math.pow(2, this.selectedAlgorithm);
    this.timeResult = this.allBits / this.speed;

    this.algoFormGroup = this._fb.group({
      algoCtrl: ['', Validators.required]
    });
    this.speedFormGroup = this._fb.group({
      speedInput: ['', Validators.required]
    });
  }

  
}
