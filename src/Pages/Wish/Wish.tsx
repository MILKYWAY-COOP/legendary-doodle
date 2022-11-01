import { WishContainer } from './Wish.styled';

const Wish = () => {
  return (
    <WishContainer>
      <h1>Wish List</h1>
      <div className='often'>
        <h2>Items We Often Need:</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
          <li>Item 7</li>
          <li>Item 8</li>
          <li>Item 9</li>
          <li>Item 10</li>
          <li>Item 11</li>
          <li>Item 12</li>
        </ul>
      </div>

      <div className='wish'>
        <h2>Items We Also Need:</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <p>
        *If you have any questions please feel free to contact us by phone
        (#######) or email at (########@gmail.com)*
      </p>

      <div className='curve'></div>
    </WishContainer>
  );
};

export default Wish;
