export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction(), 'Guardrail was processed');
  } catch (error) {
    queue.push('Error: cannot divide by 0', 'Guardrail was processed');
  }
  return queue;
}
