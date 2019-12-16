const inputs=document.querySelectorAll(".controls input");
const h3value=document.querySelector("#colorvalue");

function handleChange(){
  const sufix=this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`,this.value+sufix);
  console.log(this.value);
  h3value.innerHtml="text";
}

inputs.forEach(function(post){
  post.addEventListener("change",handleChange);
});

inputs.forEach(function(post){
  post.addEventListener("mousemove",handleChange);
});
