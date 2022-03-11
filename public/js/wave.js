let waveContainer = $('.wave'),
    particles = [],
    sWidth = $(window).width(),
    particleSpacing = 10, // space of px betwwen each particle Column
    particleColumns = sWidth / particleSpacing,
    index = 0,
    col = 0;

for (var i = 0; i < 2; i = i + (particleSpacing / sWidth) * 2) {
    col++;
    let cosX = i * Math.PI;
    let cosY = Math.sin(cosX);
    buildParticle(cosY, col);
    console.log(cosY);
}

function buildParticle(y, col) {
    let rows = Math.floor(Math.random() * (13 - 5 + 1) + 5);
    let z = col / particleColumns;
    let thickness = (Math.cos(z * Math.PI) * 100) * 3;
    let yPrecentChange = (Math.cos(z * Math.PI) * 100) * 5;

    for (var i = 5; i <= rows; i++) {
        index++;
        let particleHtml = '<div class="wave-particle wave-particle-' + index + '"></div>',
            xDeviation = Math.floor((Math.random() * 10) + 5),
            yDeviation = Math.floor(Math.random() * (thickness - 40 + 1) + 40),
            sizeDeviation = Math.floor(Math.random() * (15 - 3 + 1) + 3),
            opacityDeviation = Math.floor(Math.random() * (100 - 20 + 1) + 20) / 100 * 1;
        waveContainer.append(particleHtml);

        let left = col * particleSpacing + xDeviation;
        let top = (y + 1) * 100 + 500 + yDeviation;

        let particleDom = $('.wave-particle-' + index);

        let yPre = (Math.floor(Math.random() * (200 + 70 + 1) - 70)) * (y * 10) + 40;

        gsap.to(particleDom, {
            keyframes: {
                "0%": { yPercent: 0 },
                "50%": { yPercent: yPre, ease: "in-out" },
                "100%": { yPercent: 0 },
                easeEach: "ease-in-out"
            },
            duration: 6,
            repeat: -1,
            transformOrigin: "center bottom"
        });


        particleDom.css({
            "left": left,
            "top": top,
            "width": sizeDeviation,
            "height": sizeDeviation,
            "opacity": opacityDeviation
        });

        particleDom.addClass('animate');
    }
}




// TODO
// size opacity and z-index should all be connected