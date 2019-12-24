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
  
  speed;
  entrySpeed; 
  selectedAlgorithm;
  selectedNumber;
  allBits;
  second;
  day;
  month;
  year;

  ngOnInit() {
    this.algoFormGroup = this._fb.group({
      algoCtrl: ['', Validators.required]
    });
    this.speedFormGroup = this._fb.group({
      speedInput: ['', Validators.required],
      numberInput: ''
    });
  }

  ngDoCheck() {
    this.speed = this.entrySpeed * this.selectedNumber; 
    this.allBits = Math.pow(2, this.selectedAlgorithm);
    this.second = this.allBits / this.speed;
    this.day = Math.floor(this.second/(3600*24));
    this.month = Math.floor(this.day/30);
    this.year = Math.floor(this.day/365);
  }

  
}
