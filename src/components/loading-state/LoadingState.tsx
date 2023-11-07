import { LoadingStateStyles } from './LoadingState.Styles';
import { ColorRing } from 'react-loader-spinner';

const LoadingState = () => {
  return (
    <LoadingStateStyles>
      <div className="container"></div>
      <div className="color-ring">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#0aaffc', '#609bf4', '#6ab8f8', '#81b6bd', '#84989b']}
        />
      </div>
    </LoadingStateStyles>
  );
};

export default LoadingState;
