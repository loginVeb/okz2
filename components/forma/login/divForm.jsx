
import Forma from '@/components/forma/login/forma';

async function DivForm(props) {
  const { styles } = props;


  return (
    <div className={styles.divForm}>
      <Forma styles={styles} />
    </div>
  )
}

export default DivForm