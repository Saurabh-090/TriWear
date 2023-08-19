import { motion , AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';


const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
                <img
                src='./threejs.png'
                alt = "logo"
                className="w-8 h-8 object-contain"
                />
            </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div>
                <h1 className="head-text">
                TriWear 
                </h1>
                <strong><em><font size="8">"Immersive 3D T-Shirt Designer"</font></em></strong>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className = "flex flex-col gap-5"
            >
                <p className='max-w-md font-normal text-grey-600 text-base'>
                "Elevate Your Wardrobe: Craft Your Signature Shirt using our Cutting-edge 3D Customization Tool."<strong><em>Unleash your imagination</em></strong>{" "}
                and define your own style.
                </p>

                <CustomButton
                    type = "filled"
                    title = "Customize It"
                    handleClick = {() => state.intro = false}
                    customStyles = "w-fit px-4 py-2.5 font-bold text-sm" 
                />

            </motion.div>

            </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home