
type MachineSlotProps = {
  className?: string
  label: string
}
export const MachineSlot = ({className, label}: MachineSlotProps) => {
  return (
    <span className={className}>{label}</span>
  )
}