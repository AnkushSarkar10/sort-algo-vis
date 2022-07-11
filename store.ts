import { resolve } from "dns";
import { defineStore } from "pinia";

// types
interface State {
  array: number[];
  arrLen: number;
  min: number;
  max: number;
  sortSpeed: number;
  animationsIndx: {
    swap_1: number | null;
    swap_2: number | null;
    done: number[];
  };
  animations: { swap: number[]; done: number[] }[];
  sortable: boolean;
}

interface Getters {}

interface Actions {
  randomiseArr(): void;
  timeout(ms: number): void;
  bubleSort(arr: Array<number>): void;
}

export const useArrStore = defineStore<"array-store", State, {}, Actions>(
  "array-store",
  {
    state: () => {
      return {
        array: [],
        arrLen: 80,
        min: 10,
        max: 180,
        sortSpeed: 10, // in ms
        animationsIndx: {
          swap_1: null,
          swap_2: null,
          done: [],
        },
        sortable: true,
        animations: []
      };
    },
    actions: {
      randomiseArr() {
        this.array = [];
        this.animationsIndx = {
          swap_1: null,
          swap_2: null,
          done: [],
        };
        for (let i = 0; i < this.arrLen; i++) {
          this.array.push(
            Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
          );
        }
      },
      timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
      bubleSort(arr: Array<number>) {
        this.sortable = false;
        let anime:any = {};
        for (let i = 0; i < this.arrLen; i++) {
          for (let j = 0; j < this.arrLen - i - 1; j++) {
            console.log("happenin");
            if (arr[j] > arr[j + 1]) {
              anime.swap = [j, j+1];
              this.animations.push(anime);
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
          }
          this.animations.done.push(this.arrLen - 1 - i);
        }
        this.sortable = true;
      },
    },
  }
);
