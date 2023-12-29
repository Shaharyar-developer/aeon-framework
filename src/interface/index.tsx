import {} from "react";
import { Text } from "ink";

const TextArea = (props: { data: string }) => {
  return <Text color="green">{props.data}</Text>;
};

export { TextArea };
