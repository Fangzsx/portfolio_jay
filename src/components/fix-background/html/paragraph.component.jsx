const Paragraph = ({text}) => (
    <div className='d-flex flex-row'>
        <label className='symbols-color'>&lt;</label>
        <label className='elements-color'>p</label>
        <label className='symbols-color'>&gt;</label>
        <label className='text-white'>{text}</label>
        <label className='symbols-color'>&lt;/</label>
        <label className='elements-color'>p</label>
        <label className='symbols-color'>&gt;</label>
    </div>
)

export default Paragraph;
