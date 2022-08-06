import { describe, expect, it } from "vitest";
import { stepify } from "../index";

describe("test", () => {
  it("should pass", () => {
    const code = `function twoNumberSum(array, targetSum) {
        const hash = {}
        for(let number of array){
            if(hash[number]){
                return number > hash[number] ? [hash[number], number] : [number, hash[number]]
            }
            hash[targetSum - number] = number;
        }
        return []
    }
    `;
    console.log(stepify(code));
  });
});
