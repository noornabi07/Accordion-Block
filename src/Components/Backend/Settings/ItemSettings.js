import { PanelRow, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import { useEffect, useState } from 'react';

import { Label } from '../../../../../bpl-tools/Components';
import { TinyEditor } from './Panel/TinyEditor';

const ItemSettings = ({ attributes, setAttributes, arrKey, index, setActiveIndex }) => {
  const items = attributes[arrKey];
  const { title, content } = items[index];

  const [desContent, setDesContent] = useState(content);

  useEffect(() => {
    const newContent = produce(items, draft => {
      draft[index].content = desContent;
    })
    setAttributes({ [arrKey]: newContent });
  }, [desContent])

  const updateAccordion = (property, val) => {
    const accordions = produce(items, draft => {
      draft[index][property] = val;
    });
    setAttributes({ [arrKey]: accordions });
    setActiveIndex(index);
  }

  return <>
    <PanelRow className='mt20 mb20'>
      <Label className=''>{__('Title:', 'accordion')}</Label>
      <TextControl value={title} onChange={val => updateAccordion('title', val)} placeholder={__('Accordion Title', 'accordion')} />
    </PanelRow>

    <TinyEditor value={content} onChange={(val) => { setDesContent(val); }} index={index} />
  </>
}
export default ItemSettings;