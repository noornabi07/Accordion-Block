<?php
$id = wp_unique_id('babAccordion-');

// extract($attributes);
// foreach ($accordions as $index => $item) {
//   $blocks = parse_blocks($item['content']);
//   $content = '';
//   foreach ($blocks as $block) {
//     $content .= render_block($block);
//   }

//   $accordions[$index]['content'] = $content;
// }

// $attributes['accordions'] = $accordions;

?>
<div <?php echo get_block_wrapper_attributes(); ?> id='<?php echo esc_attr($id); ?>'
  data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>