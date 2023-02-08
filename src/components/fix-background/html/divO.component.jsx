import Class from './class.component.jsx';

const DivO = ({text}) => (

            <div className='d-flex flex-row'>
                <label className='symbols-color'>&lt;</label>
                <label className='elements-color'>div</label>
                <Class className={text}/>
                <label className='symbols-color'>&gt;</label>
            </div>
)

export default DivO;
