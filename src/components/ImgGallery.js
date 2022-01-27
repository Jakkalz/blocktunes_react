import ImgFigure from "./ImgFigure";

function ImgGallery(){
    const contributors = [
        {
            name: 'Jak',
            tag: 'Creator/Producter',
            imgSrc: require('../images/team/2.jpeg')          
        },
        {
            name: 'Phoebe',
            tag: 'Lead Composer',
            imgSrc: require('../images/team/3.jpeg')          
        },
        {
            name: 'Marco',
            tag: 'Lead Developer',
            imgSrc: require('../images/team/4.jpeg')          
        },
        {
            name: 'Ben',
            tag: 'Music Logic Developer',
            imgSrc: require('../images/team/5.jpeg')          
        },
        {
            name: 'Alex',
            tag: 'Mixing Engineer',
            imgSrc: require('../images/team/6.jpeg')          
        },
        {
            name: 'John',
            tag: 'Guitarist',
            imgSrc: require('../images/team/7.jpeg')          
        },
        {
            name: 'Sally',
            tag: 'Pianist',
            imgSrc: require('../images/team/8.jpeg')          
        },
        {
            name: 'Jack',
            tag: 'Percussions',
            imgSrc: require('../images/team/9.jpeg')          
        },  {
            name: 'Amy',
            tag: 'Vocals',
            imgSrc: require('../images/team/10.jpeg')          
        },
        {
            name: 'Jeremy',
            tag: 'Triangle',
            imgSrc: require('../images/team/11.jpeg')          
        },
        {
            name: 'Melanie',
            tag: 'Vocals',
            imgSrc: require('../images/team/12.jpeg')          
        },
        {
            name: 'Ryan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/13.jpeg')          
        },
        {
            name: 'Bob',
            tag: 'Violin',
            imgSrc: require('../images/team/14.jpeg')          
        },
        {
            name: 'Rylan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/15.jpeg')          
        },
        {
            name: 'Jake',
            tag: 'Violin',
            imgSrc: require('../images/team/16.jpeg')          
        },
        {
            name: 'Rachel',
            tag: 'Vocals',
            imgSrc: require('../images/team/17.jpeg')          
        },
        {
            name: 'Ricardo',
            tag: 'Guitarist',
            imgSrc: require('../images/team/18.jpeg')          
        },
        {
            name: 'Robert',
            tag: 'Violin',
            imgSrc: require('../images/team/19.jpeg')          
        },
        {
            name: 'Daniel',
            tag: 'Guitarist',
            imgSrc: require('../images/team/20.jpeg')          
        },
        {
            name: 'Harry',
            tag: 'Violin',
            imgSrc: require('../images/team/21.jpeg')          
        },
        {
            name: 'Louise',
            tag: 'Vocals',
            imgSrc: require('../images/team/22.jpeg')          
        },
        {
            name: 'Ryan B',
            tag: 'Guitarist',
            imgSrc: require('../images/team/23.jpeg')          
        },
        {
            name: 'Bobby',
            tag: 'Violin',
            imgSrc: require('../images/team/24.jpeg')          
        },
        {
            name: 'Michael',
            tag: 'Guitarist',
            imgSrc: require('../images/team/25.jpeg')          
        },
        {
            name: 'Mike',
            tag: 'Violin',
            imgSrc: require('../images/team/26.jpeg')          
        },
        {
            name: 'Harriet',
            tag: 'Vocals',
            imgSrc: require('../images/team/27.jpeg')          
        },
        {
            name: 'Laurence',
            tag: 'Guitarist',
            imgSrc: require('../images/team/28.jpeg')          
        },
        {
            name: 'Paul',
            tag: 'Violin',
            imgSrc: require('../images/team/29.jpeg')          
        },
        {
            name: 'Owen',
            tag: 'Guitarist',
            imgSrc: require('../images/team/30.jpeg')          
        },
        {
            name: 'Bryan',
            tag: 'Violin',
            imgSrc: require('../images/team/31.jpeg')          
        },
        {
            name: 'Frances',
            tag: 'Vocals',
            imgSrc: require('../images/team/32.jpeg')          
        },
        {
            name: 'Kai',
            tag: 'Guitarist',
            imgSrc: require('../images/team/1.jpeg')          
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
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
            
                {row1.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row2.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
           
                {row2.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row3.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
           
                {row3.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
            </div>
            <div className="image-gallery">
                {row4.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
           
                {row4.map(({name, tag, imgSrc}) => {
                    return <ImgFigure key={name} caption={name} subCaption={tag} src={imgSrc}/>
                })}
            </div>

        </section>
    )

}

export default ImgGallery;
