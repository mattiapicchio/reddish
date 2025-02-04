import { CancelIcon } from '@/components/icons/CancelIcon'
import { DeleteIcon } from '@/components/icons/DeleteIcon'
import { EditIcon } from '@/components/icons/EditIcon'
import { MinusIcon } from '@/components/icons/MinusIcon'
import { PlusIcon } from '@/components/icons/PlusIcon'
import { ReplyIcon } from '@/components/icons/ReplyIcon'
import { SaveIcon } from '@/components/icons/SaveIcon'
import { NODE_ACTION } from '@/shared/data/queryKeys'
import { cn } from '@/utils/cn'

interface ActionConfigurationTypes {
  [key: string]: {
    icon: React.ReactNode
  }
}

const configurations: ActionConfigurationTypes = {
  [NODE_ACTION.delete]: {
    icon: <DeleteIcon />,
  },
  [NODE_ACTION.reply]: {
    icon: <ReplyIcon />,
  },
  [NODE_ACTION.edit]: {
    icon: <EditIcon />,
  },
  [NODE_ACTION.expand]: {
    icon: <PlusIcon />,
  },
  [NODE_ACTION.collapse]: {
    icon: <MinusIcon />,
  },
  [NODE_ACTION.cancel]: {
    icon: <CancelIcon />,
  },
  [NODE_ACTION.save]: {
    icon: <SaveIcon />,
  },
}

function getConfiguration(type: string) {
  return configurations[type]
}

type NodeActionProps = {
  action: keyof typeof NODE_ACTION
  classname?: string
  onClickCallback?: () => void
}

export default function NodeAction({ action, classname, onClickCallback }: NodeActionProps) {
  const config = getConfiguration(action)

  return (
    <div
      className={cn('m-2 cursor-pointer hover:text-brand-blue', classname)}
      onClick={onClickCallback}
    >
      {config.icon}
    </div>
  )
}
