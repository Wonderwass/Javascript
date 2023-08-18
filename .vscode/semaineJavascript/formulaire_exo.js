
let totalHt= document.getElementById("totalht");
let totalTtc= document.getElementById("totalttc");
    document.querySelector("select").addEventListener("change", function() {
      console.log(this.value);
      totalHt.value=this.value;
      totalTtc.value=Math.round(this.value*1.2*100)/100;

    });

