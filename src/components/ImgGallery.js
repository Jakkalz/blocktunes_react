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
        {
            name: 'Rylan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Jake',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Rachel',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Ricardo',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Robert',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Daniel',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Harry',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Louise',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Ryan B',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Bobby',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Michael',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Mike',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Harriet',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Laurence',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Paul',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Owen',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Bryan',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Frances',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Kai',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Juri',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Evan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Will',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Akexandra',
            tag: 'Vocals',
            imgSrc: require('../images/team/phoebe.jpeg')          
        },
        {
            name: 'Adam',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Noah',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        {
            name: 'Liam',
            tag: 'Guitarist',
            imgSrc: require('../images/team/marco.jpeg')          
        },
        {
            name: 'Marvin',
            tag: 'Violin',
            imgSrc: require('../images/team/alex.jpeg')          
        },
        
    ]

    const row1 = contributors.slice(0, 10);
    const row2 = contributors.slice(10, 20);
    const row3 = contributors.slice(20, 30);
    const row4 = contributors.slice(30, 40);
    

    return (
        <section className="image-galleries">
            <div className="image-gallery">
                {row1.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
            
                {row1.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row2.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
           
                {row2.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row3.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
           
                {row3.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row4.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
           
                {row4.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={''} src={imgSrc}/>
                })}
            </div>

        </section>
    )

}

export default ImgGallery;