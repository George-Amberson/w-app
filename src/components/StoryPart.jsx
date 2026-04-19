import { useInView } from "react-intersection-observer"
const StoryPart = ({text, className}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // анимация только один раз
    threshold: 0.8     // 20% элемента видно
  })
  return (
    <p className={`${className} ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}`} ref={ref}>{text}</p>
  )
}
export default StoryPart