import RegularLayout from '../displays/RegularLayout';
import SiteLogo from '../components/SiteLogo';
import HeroText from '../components/HeroText';

const Index = (): JSX.Element => (
  <RegularLayout>
    <div
      style={{ textAlign: 'center', paddingTop: '1em', marginBottom: '4em' }}
    >
      <SiteLogo size={4} />
    </div>

    <div style={{ maxWidth: '32em', textAlign: 'center', margin: '0 auto' }}>
      <HeroText size={1.4} faded>
        Dessert helps you transition from JavaScript to WebAssemly. We provide
        drop-in replacements for the modules you are already using and that slow
        down your application.
      </HeroText>
    </div>
  </RegularLayout>
);

export default Index;
