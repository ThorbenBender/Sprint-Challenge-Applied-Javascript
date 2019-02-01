
class Carousel {
    constructor(element){
        this.element = element;
        
        this.leftButton = element.querySelector('.left-button');

        this.rightButton = element.querySelector('.right-button');

        this.imgs = element.querySelectorAll('img');
        this.imgIndex = 0;

        this.imgs[0].style.display = 'block';

        this.leftButton.addEventListener('click', () => this.decrease());

        this.rightButton.addEventListener('click', () => this.increase());
    }
    increase(){
        this.imgIndex++;
        this.imgs.forEach(img => img.style.display = 'none');
        if(this.imgIndex > this.imgs.length - 1){
            this.imgIndex = 0;
            console.log(this.imgIndex);
        } else {
            console.log(this.imgIndex);
        }
        this.currentImg = this.imgs[this.imgIndex];
        this.currentImg.style.display = 'block';
    }
    decrease(){
        this.imgIndex--;
        this.imgs.forEach(img => img.style.display = 'none');
        if (this.imgIndex < 0){
            this.imgIndex = this.imgs.length - 1;
            console.log(this.imgIndex);
        } else {
            console.log(this.imgIndex);
        }
        this.currentImg = this.imgs[this.imgIndex];
        this.currentImg.style.display = 'block';
    }
}

let carousel = document.querySelectorAll('.carousel').forEach(ca => new Carousel(ca));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/