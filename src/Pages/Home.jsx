import axios from 'axios';
import Card from '../Components/Card'
import './style.css';


const BookSearch = ({books}) => {

  console.log(books)

  return (
    <>
    <div className='container'>
    {books?.map((item,index)=>(
    <Card key = {item.id} name={item.volumeInfo.title} yazar={item?.volumeInfo?.authors} imj={item?.volumeInfo?.imageLinks?.thumbnail} desc={item?.volumeInfo?.description} pher={item?.volumeInfo?.publisher} pcount={item?.volumeInfo?.pageCount } dil={item.volumeInfo.language} price={item?.saleInfo?.listPrice?.amount}
    tur={item?.volumeInfo?.categories} />
     ))}
    </div>
    </>
  );
};

export default BookSearch;