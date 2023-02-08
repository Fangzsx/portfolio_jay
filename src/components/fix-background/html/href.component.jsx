const Href = ({value, text}) => (
    <div className='d-flex flex-row'>
        <label className='symbols-color'>&lt;</label>
        <label className='elements-color'>a</label>
        <label className='class-color mx-1'>href</label>
        <label className='symbols-color'>="</label>
        <label className='values-color'>{value}</label>
        <label className='symbols-color'>"&gt;</label>
        <label className='text-white'>{text}</label>
        <label className='symbols-color'>&lt;/</label>
        <label className='elements-color'>a</label>
        <label className='symbols-color'>&gt;</label>
    </div>

)
export default Href;
