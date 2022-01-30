import ImgFigure from "./ImgFigure";

function ImgGallery(){
    const contributors = [
        {
            name: 'ike',
            tag: 'bass',
            imgSrc: require('../images/team/36.jpg')          
        },
        {
            name: 'nikita',
            tag: 'vocals',
            imgSrc: require('../images/team/24.png')          
        },
        {
            name: 'marco',
            tag: 'founder/lead developer',
            imgSrc: require('../images/team/43.jpg')          
        },
        {
            name: 'garry',
            tag: 'vocals/producer',
            imgSrc: require('../images/team/30.png')          
        },
        {
            name: 'reeves',
            tag: 'guitar/producer',
            imgSrc: require('../images/team/5.jpg')          
        },
        {
            name: 'beddiss',
            tag: 'drums',
            imgSrc: require('../images/team/11.png')          
        },
        {
            name: 'rich',
            tag: 'producer',
            imgSrc: require('../images/team/41.png')          
        },
        {
            name: 'dylan-s',
            tag: 'producer',
            imgSrc: require('../images/team/16.jpg')          
        },  {
            name: 'hopkin',
            tag: 'vocals',
            imgSrc: require('../images/team/25.jpg')          
        },
        {
            name: 'chris',
            tag: 'trombone',
            imgSrc: require('../images/team/22.png')          
        },
        {
            name: 'charlie',
            tag: 'rap',
            imgSrc: require('../images/team/15.jpg')          
        },
        {
            name: 'women in love',
            tag: 'vocals',
            imgSrc: require('../images/team/9.jpg')          
        },
        {
            name: 'justin',
            tag: 'instrumentalist',
            imgSrc: require('../images/team/21.jpg')          
        },
        {
            name: 'phoebe garratt',
            tag: 'founder/lead composer',
            imgSrc: require('../images/team/3.png')          
        },
        {
            name: 'mandy groves',
            tag: 'vocals',
            imgSrc: require('../images/team/12.jpg')          
        },
        {
            name: 'ben babik',
            tag: 'music logic developer',
            imgSrc: require('../images/team/38.png')          
        },
        {
            name: 'al',
            tag: 'lead producer/master mixer',
            imgSrc: require('../images/team/1.jpg')          
        },
        {
            name: '(0)171',
            tag: 'vocals',
            imgSrc: require('../images/team/7.png')          
        },
        {
            name: 'dimi',
            tag: 'producer',
            imgSrc: require('../images/team/23.png')          
        },
        {
            name: 'harry',
            tag: 'guitar',
            imgSrc: require('../images/team/8.png')          
        },
        {
            name: 'matthew (the molotovs)',
            tag: 'vocals/guitar',
            imgSrc: require('../images/team/8.png')          
        },
        {
            name: 'myth',
            tag: 'producer',
            imgSrc: require('../images/team/37.jpg')          
        },
        {
            name: 'gambo',
            tag: 'founder/creator',
            imgSrc: require('../images/team/20.png')          
        },
        {
            name: 'T.O.L.D.',
            tag: 'band',
            imgSrc: require('../images/team/34.jpg')          
        },
        {
            name: 'damon',
            tag: 'sax',
            imgSrc: require('../images/team/17.png')          
        },
        {
            name: 'rhianna audermars',
            tag: 'rap',
            imgSrc: require('../images/team/6.png')          
        },
        {
            name: 'ally mcdougal',
            tag: 'drums',
            imgSrc: require('../images/team/13.png')          
        },
        {
            name: 'ghostchant',
            tag: 'producer',
            imgSrc: require('../images/team/10.png')          
        },
        {
            name: 'oli james',
            tag: 'vocals/producer',
            imgSrc: require('../images/team/35.jpg')          
        },
        {
            name: 'DXSH KXNE',
            tag: 'rap',
            imgSrc: require('../images/team/28.png')          
        },
        {
            name: 'schlechte',
            tag: 'producer',
            imgSrc: require('../images/team/31.png')          
        },
        {
            name: 'monnette',
            tag: 'vocals',
            imgSrc: require('../images/team/2.png')          
        },
        {
            name: 'dj kenny',
            tag: 'producer',
            imgSrc: require('../images/team/26.png')          
        },
        {
            name: 'phbs',
            tag: 'keys',
            imgSrc: require('../images/team/27.jpg')          
        },
        {
            name: 'CH',
            tag: 'guitar',
            imgSrc: require('../images/team/4.jpg')          
        },
        {
            name: 'eugenius musica',
            tag: 'rap/producer',
            imgSrc: require('../images/team/33.jpg')          
        },
        {
            name: 'jak',
            tag: 'the gutter butter',
            imgSrc: require('../images/team/42.jpg')          
        },
        {
            name: 'calyssa',
            tag: 'violin',
            imgSrc: require('../images/team/40.jpg')          
        },
        {
            name: 'nina rose',
            tag: 'vocals/producer',
            imgSrc: require('../images/team/19.jpg')          
        },
        {
            name: 'alexmikethemic',
            tag: 'rap',
            imgSrc: require('../images/team/29.jpg')          
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
