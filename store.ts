import { defineStore } from "pinia";

// types
interface State {
  array: number[];
  arrLen: number;
  min: number;
  max: number;
  sortSpeed: number;
  sliderDefault: number;
  animationsIndx: {
    bubleSwap_1: number | null;
    bubleSwap_2: number | null;
    bubleDone: number;
    mergeSwap: number | null;
    mergeDone: number[];
    quickSwap: number | null;
    quickDone: number[];
    insertSwap: number | null;
    insertDone: number[];
    selectionSwap_1: number | null;
    selectionSwap_2: number | null;
    selectionDone: number[];
  };
  sortable: boolean;
  stopSort: boolean;
}

interface Getters {}

interface Actions {
  randomiseArr(): void;
  genNewArr(): void;
  timeout(ms: number): void;
  pauseSort(): void;
  // sorting algos
  bubleSort(): void;
  merge(arr: number[], l: number, m: number, r: number): void;
  mergeSort(arr?: number[], l?: number, r?: number): void;
  partition(arr: number[], start: number, end: number): Promise<number>;
  quickSort(arr?: number[], start?: number, end?: number): void;
  insertionSort(arr?: number[], n?: number): void;
  selectionSort(arr?: number[], n?: number): void;
}

export const useArrStore = defineStore<"array-store", State, {}, Actions>(
  "array-store",
  {
    state: () => {
      return {
        array: [],
        arrLen: 94,
        min: 7,
        max: 190,
        sortSpeed: 1, // in ms
        sliderDefault: 80, // 0 | 20 | 40 | 60 | 80 | 100
        animationsIndx: {
          bubleSwap_1: null,
          bubleSwap_2: null,
          bubleDone: 0,
          mergeSwap: null,
          mergeDone: [],
          quickSwap: null,
          quickDone: [],
          insertSwap: null,
          insertDone: [],
          selectionSwap_1: null,
          selectionSwap_2: null,
          selectionDone: [],
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
          bubleSwap_1: null,
          bubleSwap_2: null,
          bubleDone: 0,
          mergeSwap: null,
          mergeDone: [],
          quickSwap: null,
          quickDone: [],
          insertSwap: null,
          insertDone: [],
          selectionSwap_1: null,
          selectionSwap_2: null,
          selectionDone: [],
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

        for (let i = 0; i < this.arrLen; i++) {
          this.array.push(
            Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
          );
        }

        this.animationsIndx = {
          bubleSwap_1: null,
          bubleSwap_2: null,
          bubleDone: 0,
          mergeSwap: null,
          mergeDone: [],
          quickSwap: null,
          quickDone: [],
          insertSwap: null,
          insertDone: [],
          selectionSwap_1: null,
          selectionSwap_2: null,
          selectionDone: [],
        };
      },
      pauseSort() {
        this.stopSort = true;
        this.sortable = true;
      },
      // sorting algos
      // Buble Sort
      async bubleSort() {
        if (this.sortable) {
          this.sortable = false;
          this.stopSort = false;

          for (let i = 0; i < this.arrLen; i++) {
            for (let j = 0; j < this.arrLen - i - 1; j++) {
              if (this.array[j] > this.array[j + 1]) {
                //
                if (this.stopSort === true) {
                  return;
                }
                //
                this.animationsIndx.bubleSwap_1 = j;
                this.animationsIndx.bubleSwap_2 = j + 1;
                let temp = this.array[j];
                this.array[j] = this.array[j + 1];
                this.array[j + 1] = temp;
                await this.timeout(this.sortSpeed);
                this.animationsIndx.bubleSwap_1 = null;
                this.animationsIndx.bubleSwap_2 = null;
              }
            }
            this.animationsIndx.bubleDone++;
          }
          this.sortable = true;
        }
      },
      // Merge Sort
      // First subarray is arr[l..m]
      // Second subarray is arr[m+1..r]
      async merge(arr: number[], l: number, m: number, r: number) {
        // lengths of the first sub arr and second sub array
        let n1 = m - l + 1;
        let n2 = r - m;
        // make temp arrays
        let L = new Array(n1);
        let R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++) L[i] = arr[l + i];
        for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

        // Initial index of first subarray
        let i = 0;
        // Initial index of second subarray
        let j = 0;
        // Initial index of merged subarray
        let k = l;

        // the actual merging stuff
        while (i < n1 && j < n2) {
          if (this.stopSort) return;
          // comparing the untouched elemets of the right temp array, to the untouched elemts of the left temp arr
          if (L[i] <= R[j]) {
            arr[k] = L[i];
            this.animationsIndx.mergeSwap = k;
            await this.timeout(this.sortSpeed);
            this.animationsIndx.mergeSwap = null;
            i++;
          } else {
            arr[k] = R[j];
            this.animationsIndx.mergeSwap = k;
            await this.timeout(this.sortSpeed);
            this.animationsIndx.mergeSwap = null;
            j++;
          }
          k++;
        }
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
          arr[k] = L[i];
          this.animationsIndx.mergeSwap = k;
          await this.timeout(this.sortSpeed);
          this.animationsIndx.mergeSwap = null;
          i++;
          k++;
        }
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
          arr[k] = R[j];
          this.animationsIndx.mergeSwap = k;
          await this.timeout(this.sortSpeed);
          this.animationsIndx.mergeSwap = null;
          j++;
          k++;
        }
      },

      // merge sort takes the global array, leftindex = 0, rightindex = array size - 1 as default arguments
      async mergeSort(
        arr: number[] = this.array,
        l: number = 0,
        r: number = this.arrLen - 1
      ) {
        if (l >= r || this.stopSort) {
          return; //returns recursively
        }

        let m = l + ((r - l) >> 1);
        await this.mergeSort(arr, l, m);
        await this.mergeSort(arr, m + 1, r);
        await this.merge(arr, l, m, r);
        for (let i = l; i <= r; i++) {
          if (!this.stopSort) this.animationsIndx.mergeDone.push(i);
        }
      },
      // QuickSort
      async partition(arr: number[], start: number, end: number) {
        // Taking the last element as the pivot
        const pivotValue = arr[end];
        let pivotIndex = start;
        for (let i = start; i < end; i++) {
          if (this.stopSort) return;
          if (arr[i] < pivotValue) {
            // Swapping elements
            this.animationsIndx.quickSwap = i;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            await this.timeout(this.sortSpeed);
            this.animationsIndx.quickSwap = null;
            // Moving to next element
            pivotIndex++;
          }
        }
        // Putting the pivot value in the middle
        if (this.stopSort) return;
        this.animationsIndx.quickSwap = pivotIndex;
        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        await this.timeout(this.sortSpeed);

        this.animationsIndx.quickSwap = null;
        return pivotIndex;
      },

      async quickSort(
        arr: number[] = this.array,
        start: number = 0,
        end: number = this.arrLen - 1
      ) {
        // Base case or terminating case
        if (start >= end || this.stopSort) {
          return;
        }

        // Returns pivotIndex
        let index = await this.partition(arr, start, end);

        // Recursively apply the same logic to the left and right subarrays
        await this.quickSort(arr, start, index - 1);
        if (!this.stopSort)
          for (let i = 0; i <= index; i++)
            this.animationsIndx.quickDone.push(i);
        await this.quickSort(arr, index + 1, end);
        if (!this.stopSort)
          for (let i = index + 1; i <= end; i++)
            this.animationsIndx.quickDone.push(i);
      },
      // insertion sort
      async insertionSort(arr: number[] = this.array, n: number = this.arrLen) {
        let i: number, key: number, j: number;
        if (this.stopSort) return;
        this.animationsIndx.insertDone.push(0);
        for (i = 1; i < n; i++) {
          key = arr[i];
          j = i - 1;
          /* Move elements of arr[0..i-1], that are  
          greater than key, to one position ahead  
          of their current position */
          while (j >= 0 && arr[j] > key) {
            if (this.stopSort) return;
            this.animationsIndx.insertSwap = j;
            arr[j + 1] = arr[j];
            await this.timeout(this.sortSpeed);
            this.animationsIndx.insertSwap = null;
            j = j - 1;
          }
          this.animationsIndx.insertSwap = j + 1;
          arr[j + 1] = key;
          await this.timeout(this.sortSpeed);
          this.animationsIndx.insertSwap = null;

          if (this.stopSort) return;
          this.animationsIndx.insertDone.push(i);
        }
      },
      async selectionSort(arr: number[] = this.array, n: number = this.arrLen) {
        let i: number, j: number, min_idx: number;

        // One by one move boundary of unsorted subarray
        for (i = 0; i < n; i++) {
          if (this.stopSort == true) return;
          // Find the minimum element in unsorted array
          min_idx = i;
          for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

          // Swap the found minimum element with the first element
          this.animationsIndx.selectionSwap_1 = min_idx;
          this.animationsIndx.selectionSwap_2 = i;
          let temp = arr[min_idx];
          arr[min_idx] = arr[i];
          arr[i] = temp;
          await this.timeout(this.sortSpeed);
          this.animationsIndx.selectionSwap_1 = null;
          this.animationsIndx.selectionSwap_2 = null;
          if (!this.stopSort) this.animationsIndx.selectionDone.push(i);
        }
      },
    },
  }
);
