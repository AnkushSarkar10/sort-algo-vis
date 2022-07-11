import { defineStore } from "pinia";

// types
interface State {
  array: number[];
  arrLen: number;
  min: number;
  max: number;
  sortSpeed: number;
  animationsIndx: number[];
}

interface Getters {}

interface Actions {
  randomiseArr(): void;
  timeout(ms: number): void;
  bubleSort(arr: Array<number>): void;
  // swapItems(arr: Array<number>, index1: number, index2: number): void;
}

export const useArrStore = defineStore<"array-store", State, {}, Actions>(
  "array-store",
  {
    state: () => {
      return {
        array: [],
        arrLen: 30,
        min: 10,
        max: 180,
        sortSpeed: 50, // in ms
        animationsIndx: []
      };
    },
    actions: {
      randomiseArr() {
        this.array = [];
        for (let i = 0; i < this.arrLen; i++) {
          this.array.push(
            Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
          );
        }
      },
      timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
      // async swapItems(arr: Array<number>, index1: number, index2: number) {
      //   this.indexsToCol = [index1, index2];
      //   let temp = arr[index1];
      //   arr[index1] = arr[index2];
      //   arr[index2] = temp;
      //   await this.timeout(this.sortSpeed);
      // },
      async bubleSort(arr: Array<number>) {
        for (let i = 0; i < this.arrLen; i++) {
          for (let j = 0; j < this.arrLen - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              this.animationsIndx = [j, j+1];
              // console.log(this.indexsToCol);
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              await this.timeout(this.sortSpeed);
              this.animationsIndx = [];
            }
          }
        }
      },
    },
  }
);
