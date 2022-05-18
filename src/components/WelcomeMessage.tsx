import { defineComponent } from 'vue';

type Props = {
  user: string;
};

export default defineComponent<Props>((props) => {
  return () => <div>Hello {props.user}</div>;
});
