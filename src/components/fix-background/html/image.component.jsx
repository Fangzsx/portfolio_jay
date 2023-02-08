const Image = ({text}) => (
    <div className='d-flex flex-row'>
        <label className='symbols-color'>&lt;</label>
        <label className='elements-color'>img</label>
        <label className='class-color mx-1'>src</label>
        <label className='symbols-color'>="</label>
        <label className='values-color'>{text}</label>
        <label className='symbols-color'>"/&gt;</label>
    </div>

)
export default Image;
