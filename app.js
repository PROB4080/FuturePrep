const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰';}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();

// Progressive scroll effects: reveal sections, compact navigation and reading progress.
document.documentElement.classList.add('reveal-ready');
const revealTargets=document.querySelectorAll('.hero-copy,.hero-visual,.audience-strip>div,.audience-card,.section-heading,.program-card,.experience-image,.experience-copy,.delivery-card,.family-photo,.family-copy,.about-mark,.about-copy,.about-side>div,.cta-content,.cta-side,.inquiry-form');
revealTargets.forEach((el,index)=>{el.setAttribute('data-reveal','');if(index%3)el.setAttribute('data-reveal-delay',String(index%3));});
if('IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  revealTargets.forEach(el=>revealObserver.observe(el));
}else revealTargets.forEach(el=>el.classList.add('is-visible'));
const header=document.querySelector('.site-header');
const backToTop=document.createElement('button');backToTop.className='back-to-top';backToTop.type='button';backToTop.setAttribute('aria-label','Back to top');backToTop.innerHTML='↑';document.body.appendChild(backToTop);
let scrollTick=false;
function updateScrollUI(){const maxScroll=document.documentElement.scrollHeight-window.innerHeight;const progress=maxScroll>0?(window.scrollY/maxScroll)*100:0;header?.style.setProperty('--scroll-progress',`${progress}%`);header?.classList.toggle('is-scrolled',window.scrollY>30);backToTop.classList.toggle('is-visible',window.scrollY>500);scrollTick=false;}
window.addEventListener('scroll',()=>{if(!scrollTick){window.requestAnimationFrame(updateScrollUI);scrollTick=true;}},{passive:true});updateScrollUI();
backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}));

// Gentle pointer tilt on larger screens; no effect on touch devices.
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
 document.querySelectorAll('.program-card,.delivery-card').forEach(card=>{
  card.addEventListener('pointermove',event=>{const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width-.5;const y=(event.clientY-rect.top)/rect.height-.5;card.style.setProperty('--pointer-x',`${(x+.5)*100}%`);card.style.setProperty('--pointer-y',`${(y+.5)*100}%`);});
  card.addEventListener('pointerleave',()=>{card.style.removeProperty('--pointer-x');card.style.removeProperty('--pointer-y');});
 });
}

const inquiryForm=document.getElementById('inquiry-form');
inquiryForm?.addEventListener('submit',(event)=>{
  event.preventDefault();const data=new FormData(inquiryForm);const subject=encodeURIComponent('FuturePrep program inquiry');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nAudience: ${data.get('audience')}\nInterest: ${data.get('interest')}\n\nMessage:\n${data.get('message')||'No additional details provided.'}`);
  const status=inquiryForm.querySelector('.form-status');if(status)status.textContent='Opening your email app with the inquiry details…';
  window.location.href=`mailto:hello@futurepreplearning.com?subject=${subject}&body=${body}`;
});
const innerInquiry=document.getElementById('inner-inquiry');
innerInquiry?.addEventListener('submit',(event)=>{
  event.preventDefault();const data=new FormData(innerInquiry);const subject=encodeURIComponent('FuturePrep website inquiry');
  const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nOrganization: ${data.get('organization')}\nAudience: ${data.get('audience')}\nProgram: ${data.get('program')}\n\nMessage:\n${data.get('message')||'No additional details provided.'}`);
  const status=document.getElementById('contact-status');if(status)status.textContent='Opening your email app with the inquiry details…';
  window.location.href=`mailto:hello@futurepreplearning.com?subject=${subject}&body=${body}`;
});
