import React from "react";
import classes from './Home.module.css'

const Home=()=>{
    return(
        <section id="tours" className={classes.container}>
        <h2>TOURS</h2>
        <div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL16</span>
                <span className={classes.tourplace}>DETROIT, MI</span>
                <span className={classes.tourspecplace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL19</span>
                <span className={classes.tourplace}>TORONTO,ON</span>
                <span className={classes.tourspecplace}>BUDWEISER STAGE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL 22</span>
                <span className={classes.tourplace}> BRISTOW, VA</span>
                <span className={classes.tourspecplace}>JIGGY LUBE LIVE</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>JUL 29</span>
                <span className={classes.tourplace}>PHOENIX, AZ</span>
                <span className={classes.tourspecplace}> AKCHIN PAVILION</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>AUG 2</span>
                <span className={classes.tourplace}>LAS VEGAS, NV</span>
                <span className={classes.tourspecplace}>TMOBILE ARENA</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
            <div className={classes.touritem}>
                <span className={classes.tourdate}>AUG 7</span>
                <span className={classes.tourplace}>CONCORD, CA</span>
                <span className={classes.tourspecplace}> CONCORD PAVILION</span>
                <button className={classes.buybtn}>BUY TICKETS</button>
            </div>
        </div>
    </section>

    )

} 
 


export default Home;
