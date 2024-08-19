
import Forma from '@/components/forma/registration/forma';


function DivForm(props) {
  const { styles } = props;
  return (
    <div className={styles.divForm}>
      <Forma styles={styles}/>
    </div>
  )
}

export default DivForm