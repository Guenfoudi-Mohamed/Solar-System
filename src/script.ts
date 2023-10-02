function setStar(value:number) : void{
    const container = document.querySelector('body #container') as HTMLDivElement;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const stars = container.querySelector('.stars') as HTMLDivElement;
    if(value>0){
        for(let i : number = 0;i<value;i++){
            const star = document.createElement('div') as HTMLDivElement;
            star.className = `str`;
            star.classList.add(`str${i}`);
            star.style.setProperty('top',`${Math.floor(Math.random() * containerHeight)}px`);
            star.style.setProperty('left',`${Math.floor(Math.random() * containerWidth)}px`);
            stars.appendChild(star);
        }
    }
    console.log(containerWidth,containerHeight);
}
setStar(150);