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
  sortable: boolean;
  stopSort: boolean;
}

interface Getters {}

interface Actions {
  randomiseArr(): void;
  genNewArr(): void;
  timeout(ms: number): void;
  bubleSort(): void;
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
        sortSpeed: 5, // in ms
        animationsIndx: {
          swap_1: null,
          swap_2: null,
          done: [],
        },
        sortable: true,
        stopSort: false,
      };
    },
    actions: {
      timeout(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      },
      genNewArr() {
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
      randomiseArr() {
        this.stopSort = true;
        this.sortable = true;
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
      async bubleSort() {
        if (this.sortable) {
          this.stopSort = false;
          console.log(this.stopSort);
          this.sortable = false;
          for (let i = 0; i < this.arrLen; i++) {
            for (let j = 0; j < this.arrLen - i - 1; j++) {
              if (this.array[j] > this.array[j + 1]) {
                if (this.stopSort === true) {
                  console.log(this.stopSort);
                  return;
                }
                this.animationsIndx.swap_1 = j;
                this.animationsIndx.swap_2 = j + 1;
                let temp = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = temp;
                await this.timeout(this.sortSpeed);
                this.animationsIndx.swap_1 = null;
                this.animationsIndx.swap_2 = null;
              }
            }
            this.animationsIndx.done.push(this.arrLen - 1 - i);
          }
          this.sortable = true;
        }
      },
    },
  }
);
