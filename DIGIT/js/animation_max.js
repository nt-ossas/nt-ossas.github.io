//type effect max
const mdynamicText = document.querySelector("#second span");
const mwords = ['Professional Trader', 'Crypto Lover', 'Cryptozone Founder'];

let mwordIndex = 0;
let mcharIndex = 0;
let misDeleting = false;

const maxEffect = () => {
    const mcurrentWord = mwords[mwordIndex];
    const mcurrentChar = mcurrentWord.substring(0, mcharIndex);
    mdynamicText.textContent = mcurrentChar;
    if (!misDeleting&&mcharIndex < mcurrentWord.length) {
      mcharIndex++;
      setTimeout(maxEffect, 100);
    }
    else if(misDeleting&&mcharIndex > 0){
      mcharIndex--;
      setTimeout(maxEffect, 50);
    }
    else{
      misDeleting=!misDeleting;
      mwordIndex = !misDeleting ? (mwordIndex + 1) % mwords.length : mwordIndex;
      setTimeout(maxEffect, 800);
    }
  }
  maxEffect();