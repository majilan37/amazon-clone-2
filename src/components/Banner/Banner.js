import { Container, Grid } from "@mui/material"
import { useStyles } from "./Banner.styles"
import BannerProducts from "./BannerProducts/BannerProducts"

function Banner() {
    const classes = useStyles()
    return (
        <Container maxWidth='xl' className={classes.container} > 
            <div style={{ position: 'relative', height: '600px', marginBottom: '-150px' }} >
                <img className={classes.bannerImg} src="https://bit.ly/3ln0Rvs" alt="" />
            </div>
            <div style={{ padding: '0 20px 50px 20px' }} >
                <Grid container  spacing={2} >
                    <BannerProducts 
                        id={123456}
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                        image='https://bit.ly/3FsC4yf' 
                        price={29.99}
                        rating={4.5}
                    />
                    <BannerProducts 
                        id={325414}
                        title="PS5 Playstation 5 (US Plug) Blu-ray Disc Edition Console 4K-TV Gaming, 8K Output, Ultra-High Speed 825GB SSD, WiFi 6, Bluetooth 5.1, Etekdirect customer care" 
                        image='https://bit.ly/3oHZpWC' 
                        price={499.99}
                        rating={4.5}
                    />
                    <BannerProducts 
                        id={1645236}
                        title="Alarco Gaming PC Desktop Computer Intel i5 3.10GHz,8GB Ram,1TB Hard Drive,Video Card Nvidia GTX 650 1GB" 
                        image='https://bit.ly/3uStV1b' 
                        price={799.99}
                        rating={4}
                    />
                    <BannerProducts 
                        id={8465484}
                        title="Apple iPhone 12 Pro Max, 256GB, Pacific Blue - Fully Unlocked (Renewed)" 
                        image='https://bit.ly/3llWCjN' 
                        price={1499.99}
                        rating={3}
                    />
                    <BannerProducts 
                        id={6465820}
                        title="SAMSUNG 65-Inch Class Neo QLED 8K QN800A Series - 8K UHD Quantum HDR 32x Smart TV with Alexa Built-in" 
                        image='https://bit.ly/3BBsEOo' 
                        price={2499.99}
                        rating={3.5}
                    />
                    <BannerProducts 
                        id={485513215}
                        title="Lanteso Waterproof TWS Bluetooth Earbuds with Mics Noise Reduction Touch Control Bluetooth Headphones with Deep Bass Sound in Ear Earphones for Sports" 
                        image='https://bit.ly/3AnG3si' 
                        price={19.99}
                        rating={4.5}
                    />
                    <BannerProducts 
                        id={1001245}
                        title="Z-Edge U27I4K 27-inch Gaming Monitor Ultra HD 4K 3840x2160 IPS LED Monitor, 250 cd/m², 4 ms Response Time, HDMIx2+DPx2, Built-in Speakers, FreeSync Technology" 
                        image='https://bit.ly/3iJuwxk' 
                        price={1699.99}
                        rating={5}
                        isLargeGrid
                    />
                </Grid>
            </div>
        </Container>
    )
}

export default Banner
