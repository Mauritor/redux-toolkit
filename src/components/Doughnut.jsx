import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, Title);




const Dona = ({ tasks }) => {


  return (
    <div style={{width: '200px'}}>
      <Doughnut data={tasks} />
    </div>
  )
}

export default Dona