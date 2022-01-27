import ImgFigure from "./ImgFigure";

function ImgGallery(){
    const contributors = [
        {
            name: 'Jak',
            tag: 'Creator/Producter',
            imgSrc: require('../images/team/2.png')          
        },
        {
            name: 'Phoebe',
            tag: 'Lead Composer',
            imgSrc: require('../images/team/3.png')          
        },
        {
            name: 'Marco',
            tag: 'Lead Developer',
            imgSrc: require('../images/team/4.jpg')          
        },
        {
            name: 'Ben',
            tag: 'Music Logic Developer',
            imgSrc: require('../images/team/5.jpg')          
        },
        {
            name: 'Alex',
            tag: 'Mixing Engineer',
            imgSrc: require('../images/team/6.png')          
        },
        {
            name: 'John',
            tag: 'Guitarist',
            imgSrc: require('../images/team/7.jpg')          
        },
        {
            name: 'Sally',
            tag: 'Pianist',
            imgSrc: require('../images/team/8.png')          
        },
        {
            name: 'Jack',
            tag: 'Percussions',
            imgSrc: require('../images/team/9.jpg')          
        },  {
            name: 'Amy',
            tag: 'Vocals',
            imgSrc: require('../images/team/10.jpg')          
        },
        {
            name: 'Jeremy',
            tag: 'Triangle',
            imgSrc: require('../images/team/11.png')          
        },
        {
            name: 'Melanie',
            tag: 'Vocals',
            imgSrc: require('../images/team/12.jpg')          
        },
        {
            name: 'Ryan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/13.png')          
        },
        {
            name: 'Bob',
            tag: 'Violin',
            imgSrc: require('../images/team/14.png')          
        },
        {
            name: 'Rylan',
            tag: 'Guitarist',
            imgSrc: require('../images/team/15.jpg')          
        },
        {
            name: 'Jake',
            tag: 'Violin',
            imgSrc: require('../images/team/16.jpg')          
        },
        {
            name: 'Rachel',
            tag: 'Vocals',
            imgSrc: require('../images/team/17.png')          
        },
        {
            name: 'Ricardo',
            tag: 'Guitarist',
            imgSrc: require('../images/team/18.jpg')          
        },
        {
            name: 'Robert',
            tag: 'Violin',
            imgSrc: require('../images/team/19.jpg')          
        },
        {
            name: 'Daniel',
            tag: 'Guitarist',
            imgSrc: require('../images/team/20.png')          
        },
        {
            name: 'Harry',
            tag: 'Violin',
            imgSrc: require('../images/team/21.jpg')          
        },
        {
            name: 'Louise',
            tag: 'Vocals',
            imgSrc: require('../images/team/22.jpg')          
        },
        {
            name: 'Ryan B',
            tag: 'Guitarist',
            imgSrc: require('../images/team/23.png')          
        },
        {
            name: 'Bobby',
            tag: 'Violin',
            imgSrc: require('../images/team/24.png')          
        },
        {
            name: 'Michael',
            tag: 'Guitarist',
            imgSrc: require('../images/team/25.jpg')          
        },
        {
            name: 'Mike',
            tag: 'Violin',
            imgSrc: require('../images/team/26.png')          
        },
        {
            name: 'Harriet',
            tag: 'Vocals',
            imgSrc: require('../images/team/27.jpg')          
        },
        {
            name: 'Laurence',
            tag: 'Guitarist',
            imgSrc: require('../images/team/28.jpg')          
        },
        {
            name: 'Paul',
            tag: 'Violin',
            imgSrc: require('../images/team/29.jpg')          
        },
        {
            name: 'Owen',
            tag: 'Guitarist',
            imgSrc: require('../images/team/30.jpg')          
        },
        {
            name: 'Bryan',
            tag: 'Violin',
            imgSrc: require('../images/team/31.png')          
        },
        {
            name: 'Frances',
            tag: 'Vocals',
            imgSrc: require('../images/team/32.jpg')          
        },
        {
            name: 'Kai',
            tag: 'Guitarist',
            imgSrc: require('../images/team/1.jpg')          
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
