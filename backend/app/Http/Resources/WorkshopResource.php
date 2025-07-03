<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkshopResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'workshop_title' => $this->workshop_title,
            'featured_image' => $this->featured_image,
            'workshop_type' => $this->workshop_type,
            'about_workshop' => $this->about_workshop,
            'workshop_description' => $this->workshop_description,
            'price' => $this->price,
            'format' => $this->format,
            'duration_weeks' => $this->duration_weeks,
            'time' => $this->time,
            'skill_gained' => $this->skill_gained,
            'target_audience' => $this->target_audience,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
