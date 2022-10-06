 function swap (element1, element2){
    let temp = parseInt(element1.innerText);
    element1.innerText = parseInt(element2.innerText);
    element2.innerText = temp;
}

  function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay = 500;
// Algoithms
// bubble-sort
export const bubbleSort = async() => {
    console.log('In bubbel()');
    const ele = document.querySelectorAll(".array-element");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            ele[j].style.color = 'white';
            ele[j+1].style.color = 'white';
            if(parseInt(ele[j].innerText) > parseInt(ele[j+1].innerText)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
            ele[j].style.color = 'red';
            ele[j+1].style.color = 'red';
            
        }
        ele[ele.length-1-i].style.background = 'green';
        ele[ele.length-1-i].style.color = 'white';
    }
    ele[0].style.background = 'green';
    ele[0].style.color = 'white';
}

// insertionsort
let insertionDelay = 700;
export const  insertionSort = async() =>{
    console.log('In insertion()');
    const ele = document.querySelectorAll(".array-element");
    // color
    ele[0].style.background = 'green';
    ele[0].style.color = 'white';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].innerText;
        // color
        ele[i].style.background = 'purple';
        ele[i].style.color = 'white';

        await waitforme(insertionDelay);

        while(j >= 0 && (parseInt(ele[j].innerText) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'purple';
            ele[j].style.color = 'white';
            ele[j + 1].innerText = ele[j].innerText;
            j--;

            await waitforme(insertionDelay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
                ele[k].style.color = 'white';
            }
        }
        ele[j + 1].innerText = key;
        // color
        ele[i].style.background = 'green';
        ele[i].style.color = 'white';
    }
}

// selection-sort
let selectionDelay = 700;
export const selectionSort = async()=>{
    console.log('In selection()');
    const ele = document.querySelectorAll(".array-element");
    for(let i = 0; i < ele.length; i++){
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'lightgreen';
        ele[i].style.color = 'black';
        for(let j = i+1; j < ele.length; j++){
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'purple';
            ele[j].style.color = 'white';
            await waitforme(selectionDelay);
            if(parseInt(ele[j].innerText) < parseInt(ele[min_index].innerText)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                    ele[min_index].style.color = 'red';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
                ele[j].style.color = 'red';
            }   
        }
        await waitforme(selectionDelay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        ele[min_index].style.color = 'red';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
        ele[i].style.color = 'white';
    }
}





// Merge Sort
async function merge(ele, low, mid, high){
    // console.log('In merge()');
    // console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    // console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){

        await waitforme(delay);
        // console.log('In merge left loop');
        // console.log(parseInt(ele[low + i].innerText) + ' at ' + (low+i));
        // color
        ele[low + i].style.background = 'orange';
        // left.push(ele[low+i].textContent)
        left[i] = parseInt(ele[low + i].innerText);
        // console.log(left[i]);
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        // console.log('In merge right loop');
        // console.log(parseInt(ele[mid + 1 + i].innerText) + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        // right.push(ele[mid + 1 + i].textContent)
        right[i] = ele[mid + 1 + i].innerText;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
        // console.log('In merge while loop');
        // console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            // console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                ele[k].style.color = 'white';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].innerText = left[i];
            i++;
            k++;
        }
        else{
            // console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                ele[k].style.color = 'white';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].innerText = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            ele[k].style.color = 'white';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].innerText = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            ele[k].style.color = 'white';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].innerText = right[j];
        j++;
        k++;
    }
}

export const mergeSort= async(ele, l, r) =>{
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}


// quick sort

async function partition(ele, l, r){
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'purple';
    ele[r].style.color = 'white';
    for(let j = l; j <= r - 1; j++){

        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].innerText) < parseInt(ele[r].innerText)){
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i !== j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';
    ele[i].style.color = 'white';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background !== 'green')
            ele[k].style.background = 'cyan';
    }

    return i;
}

export const  quickSort = async(ele, l, r) =>{
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
            ele[r].style.color = 'white';
            ele[l].style.color = 'white';
        }
    }
}


  

