import './DraggableMenu.css'
import Slide from './Slide.jsx'
import React, { useEffect } from 'react';


function DraggableMenu({imgs = []}){
    
  useEffect(() => {
    let slider = document.querySelector(".slider");
    let innerSlider = document.querySelector(".slider-inner");
    let sliderImg = document.querySelectorAll(".slider-img");
    let p = document.querySelectorAll(".slider-inner p");
    let button = document.querySelectorAll(".slider-inner button");
    let pressed = false;
    let startx;
    let x;
    let resetTimeout;
    function showElements() {
      p.forEach((e) => {
        e.style.opacity = "1";
      });
      button.forEach((e) => {
        e.style.opacity = "1";
      });
      
      slider.style.height = "60vh";
      slider.style.top = "30%";
    }
  
    function hideElements() {
      p.forEach((e) => {
        e.style.opacity = "0";
      });
      slider.style.height = "45vh";
      slider.style.top = "45%";
      
    }
  
    function resetInactivityTimer() {
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        hideElements();
      }, 3000);
    }
  
    slider.addEventListener("mousedown", (e) => {
      pressed = true;
      startx = e.offsetX - innerSlider.offsetLeft;
      slider.style.cursor = "grabbing";
     
      showElements();
      resetInactivityTimer();
    });
  
    slider.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();
      x = e.offsetX;
      innerSlider.style.left = `${x - startx}px`;
      verificaBordo();
  
      resetInactivityTimer();
    });
  
    slider.addEventListener("mouseup", () => {
      pressed = false;
      slider.style.cursor = "grab";
  
      resetInactivityTimer();
    });
  
    slider.addEventListener("mouseenter", () => {
      slider.style.cursor = "grab";
    });
  
    slider.addEventListener("touchstart", (e) => {
      pressed = true;
      startx = e.targetTouches[0].clientX - innerSlider.offsetLeft;
  
      showElements();
      resetInactivityTimer();
    });
  
    slider.addEventListener("touchmove", (e) => {
      if (!pressed) return;
      x = e.targetTouches[0].clientX;
      innerSlider.style.left = `${x - startx}px`;
      verificaBordo();
  
      resetInactivityTimer();
    });
  
    window.addEventListener("mouseup", () => {
      pressed = false;
    });
  
    function verificaBordo() {
      let outer = slider.getBoundingClientRect();
      let inner = innerSlider.getBoundingClientRect();
  
      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    }
  
    resetInactivityTimer();
  
    return () => {
      slider.removeEventListener("mousedown", () => {});
      slider.removeEventListener("mousemove", () => {});
      slider.removeEventListener("mouseup", () => {});
      slider.removeEventListener("touchstart", () => {});
      slider.removeEventListener("touchmove", () => {});
      clearTimeout(resetTimeout); 
    };
  }, []);
    
      return (
      <>
      <div className="slider">
                <div className="slider-inner">
                    {
                        imgs.map((img) =>  (
                            <Slide
                                key={img.id}
                                imgSrc={img.img}
                                nome = {img.nome}
                            >
                                {img.text}
                            </Slide>
                        ))
                    }
                
                    
                </div>
            </div>
            
      </>
        
            
      );
            
        
    
}

export default DraggableMenu
