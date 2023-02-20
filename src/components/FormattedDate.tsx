interface FormattedDateProps {
  date: Date
}

const FormattedDate = ({ date }: FormattedDateProps) =>
  date.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })

export default FormattedDate
