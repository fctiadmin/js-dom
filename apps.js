// var btn=document.getElementById('btn');

// btn.addEventListener('click',function(){
	// var amount=document.getElementById('amount').value;
	// var taxRate=document.getElementById('taxRate').value;
	// amount=parseInt(amount);
	// taxRate=parseInt(taxRate);
	// var parchan=(amount*taxRate)/100;
	
	// var result=document.getElementById('result');
	// result.value=parchan;
	// result.style.color='red';
	
// })
window.addEventListener('scroll',function(){
	var header=document.getElementById('header');
	header.classList.toggle('sticky',window.scrollY>100);
})