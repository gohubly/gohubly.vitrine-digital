// eslint-disable-next-line prettier/prettier
import React, { FC } from 'react'
import VtexEmptyState from '@vtex/styleguide/lib/EmptyState'

import { EmptyStateProps } from './EmptyState.types'

const EmptyState: FC<EmptyStateProps> = ({ title, message }) => (
  <div className="pv6">
    <VtexEmptyState title={title}>
      <p>{message}</p>
    </VtexEmptyState>
  </div>
)

export default EmptyState
