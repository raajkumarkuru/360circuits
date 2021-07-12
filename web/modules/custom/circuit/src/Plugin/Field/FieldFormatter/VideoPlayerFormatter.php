<?php

namespace Drupal\circuit\Plugin\Field\FieldFormatter;

use Drupal\video\Plugin\Field\FieldFormatter\VideoPlayerFormatter as VideoVideoPlayerFormatter;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Plugin implementation of the 'video_player' formatter.
 *
 * @FieldFormatter(
 *   id = "video_player_popup",
 *   label = @Translation("HTML5 Video Player Popup"),
 *   field_types = {
 *     "video"
 *   }
 * )
 */

class VideoPlayerFormatter extends VideoVideoPlayerFormatter {
  
  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    $files = $this->getEntitiesToView($items, $langcode);
    
    // Early opt-out if the field is empty.
    if (empty($files)) {
      return $elements;
    }

    // Collect cache tags to be added for each item in the field.
    foreach ($files as $delta => $file) {
      $video_uri = $file->getFileUri();
      $relative_url = file_url_transform_relative(file_create_url($video_uri));
      $elements[$delta] = [
        '#theme' => 'video_player_popup_formatter',
        '#items' => [Url::fromUserInput($relative_url)],
        '#player_attributes' => $this->getSettings(),
        '#id' => $file->id(),
      ];
    }
    return $elements;
  }

}
