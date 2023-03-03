import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';


@Injectable({
  providedIn: 'root',
})
export class StoryDetailsService {
  constructor(private snackBar: MatSnackBar) {}

  isExist: boolean = false;
  stoyrDetails: Array<{ name: string; point: number }> = [];
  autoGeneratedStories!: number[];
  
  addStory(name: string, point: number) {
    this.stoyrDetails.forEach((ele) => {
      this.isExist = ele.name === name ? true : false;
    });

    if (!this.isExist) {
      this.stoyrDetails.unshift({ name, point });
      this.showNotification('New Story has been successfully added!');
    } else {
      this.showNotification('Story already exists, Add New one');
    }
  }

  getStories(): Array<{ name: string; point: number }> {
    return this.stoyrDetails;
  }

  autoSelectStories(sprintpoint: number) {
    const allSum = (i = 0, sum = 0, sumArray: Array<number> = []) => {
      if (sum === sprintpoint) {
        result.push(sumArray);
        return;
      }
      if (i === this.stoyrDetails.length) {
        this.showNotification('Add more stories to generate auto Sprints');
        return;
      }
      if (sum + this.stoyrDetails[i].point <= sprintpoint) {
        allSum(
          i + 1,
          sum + this.stoyrDetails[i].point,
          sumArray.concat(this.stoyrDetails[i].point)
        );
      }
      allSum(i + 1, sum, sumArray);
    };
    const result: Array<number[]> = [];
    allSum();

    console.log(result);
    this.autoGeneratedStories =
      result[Math.floor(Math.random() * result.length)];
  }

  getAutogeneratedStories(): Array<{ name: string; point: number }> {
    let stories: Array<{ name: string; point: number }> = [];
    this.autoGeneratedStories.forEach((ele) => {
      this.stoyrDetails.forEach((item) => {
        if (ele === item.point) {
          stories.push(item);
        }
      });
    });

    return stories;
  }

  clearStories() {
    this.stoyrDetails = [];
    this.showNotification('Stories Cleared !');
  }

  clearSprints() {
    this.autoGeneratedStories = [];
    this.showNotification('All Sprints Cleared!');
  }

  

  showNotification(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        buttonTex: 'Ok',
      },
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}


