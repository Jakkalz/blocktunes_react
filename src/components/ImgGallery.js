import ImgFigure from "./ImgFigure";

function ImgGallery(){
    const contributors = [
        {
            name: 'Jak',
            tag: 'Creator/Producter',
            imgSrc: require('../images/team/jak.jpeg')          
        },
        {
            name: 'Phoebe',
            tag: 'Lead Composer',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Marco',
            tag: 'Lead Developer',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Ben',
            tag: 'Music Logic Developer',
            imgSrc: require('../images/team/ben.jpeg')          
        },
        {
            name: 'Alex',
            tag: 'Mixing Engineer',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'John',
            tag: 'Guitarist',
            imgSrc: require('../images/team/ben.jpeg')          
        },
        {
            name: 'Sally',
            tag: 'Pianist',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Jack',
            tag: 'Percussions',
            imgSrc: require('../images/team/marco.jpeg')          
        },  {
            name: 'Amy',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Jeremy',
            tag: 'Triangle',
            imgSrc: require('../images/team/ben.jpeg')          
        },
        {
            name: 'Melanie',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Ryan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Bob',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
    ]

    return (
        <section class="image-gallery">
            {contributors.map(({name, tag, imgSrc}) => {
                return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
            })}
        </section>
    )

}

export default ImgGallery;