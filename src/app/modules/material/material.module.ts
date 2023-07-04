import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule],
  exports: [MatCardModule, MatInputModule, MatRadioModule],
})
export class MaterialModule {}
