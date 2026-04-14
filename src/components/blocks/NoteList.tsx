import React from 'react';
import { Tag } from '@/components/ui/Tag';

interface NoteListProps {
  top: string;
  heart: string;
  base: string;
}

export function NoteList({ top, heart, base }: NoteListProps) {
  return (
    <div className="grid grid-cols-3 gap-1 p-2 w-fit mb-12">
      <div>
        <span className="font-label text-[9px] uppercase tracking-[0.2em] text-primary block mb-2">
          Top Notes
        </span>
        <Tag>{top}</Tag>
      </div>
      <div>
        <span className="font-label text-[9px] text-nowrap uppercase tracking-[0.2em] text-primary block mb-2">
          Heart Notes
        </span>
        <Tag>{heart}</Tag>
      </div>
      <div>
        <span className="font-label text-[9px] mx-1 text-nowrap uppercase tracking-[0.2em] text-primary block mb-2">
          Base Notes
        </span>
        <Tag>{base}</Tag>
      </div>
    </div>
  );
}
