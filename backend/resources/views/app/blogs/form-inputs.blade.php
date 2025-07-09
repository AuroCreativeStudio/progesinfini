@csrf

<div class="bg-white ml-64 p-6 font-sans min-h-screen">
    {{-- Title Field --}}
    <label class="flex justify-between items-start font-headline mb-2">Title</label>
    <div class="flex justify-between items-center mb-6">
        <input
            type="text"
            name="title"
            value="{{ old('title', $blog->title ?? '') }}"
            class="w-3/5 px-4 py-2 text-l font-body font-univers border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
        />
        <div class="flex items-center space-x-3">
            <button type="submit" class="export-button">
                {{ isset($blog) ? 'Update' : 'Save' }}
            </button>
        </div>
    </div>

    {{-- Tabs (you can control visibility in controller or JS later) --}}
    <div class="flex space-x-6 border-b font-headline border-gray-300 pb-2 mb-4">
        <span class="pb-1 text-mainCharcoal1 border-b-2 border-mainCharcoal1">Content</span>
        <span class="pb-1 text-gray-500">Meta</span>
    </div>

    {{-- Description 1 & Image 1 --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <h2 class="text-l font-headline mb-2">Section 1</h2>
        <textarea
            name="description_1"
            rows="4"
            class="w-full font-body font-univers border border-gray-300 rounded p-3 resize-y focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
            placeholder="Enter your first description here...">{{ old('description_1', $blog->description_1 ?? '') }}</textarea>

        <label class="block mt-4 font-headline mb-2">Image 1</label>
        <input type="file" name="img_1" accept="image/*" class="w-full text-sm border border-dashed border-gray-300 p-3 rounded" />
        @if(!empty($blog->img_1))
            <img src="{{ asset('storage/' . $blog->img_1) }}" class="w-32 mt-2 rounded shadow" />
        @endif
    </div>

    {{-- Description 2 & Image 2 --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <h2 class="text-l font-headline mb-2">Section 2</h2>
        <textarea
            name="description_2"
            rows="4"
            class="w-full font-body font-univers border border-gray-300 rounded p-3 resize-y focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
            placeholder="Enter your second description here...">{{ old('description_2', $blog->description_2 ?? '') }}</textarea>

        <label class="block mt-4 font-headline mb-2">Image 2</label>
        <input type="file" name="img_2" accept="image/*" class="w-full text-sm border border-dashed border-gray-300 p-3 rounded" />
        @if(!empty($blog->img_2))
            <img src="{{ asset('storage/' . $blog->img_2) }}" class="w-32 mt-2 rounded shadow" />
        @endif
    </div>

    {{-- Description 3 --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <h2 class="text-l font-headline mb-2">Section 3</h2>
        <textarea
            name="description_3"
            rows="4"
            class="w-full font-body font-univers border border-gray-300 rounded p-3 resize-y focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
            placeholder="Enter your third description here...">{{ old('description_3', $blog->description_3 ?? '') }}</textarea>
    </div>

    {{-- Featured Image + Alt Text --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <h2 class="text-l font-headline mb-2">Featured Image</h2>
        <input type="file" name="feature_img" accept="image/*" class="w-full text-sm border border-dashed border-gray-300 p-3 rounded" />
        @if(!empty($blog->feature_img))
            <img src="{{ asset('storage/' . $blog->feature_img) }}" class="w-32 mt-2 rounded shadow" />
        @endif

        <label class="block mt-4 text-sm font-headline mb-1">Alt Text for Images</label>
        <input
            type="text"
            name="alt_text_image"
            value="{{ old('alt_text_image', $blog->alt_text_image ?? '') }}"
            class="w-full px-3 py-2 border font-body border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
        />
    </div>

    {{-- Meta Section --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <label class="block text-sm font-headline mb-1">Meta Description</label>
        <textarea
            name="meta_description"
            rows="4"
            class="w-full px-3 py-2 font-body border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
        >{{ old('meta_description', $blog->meta_description ?? '') }}</textarea>

        <label class="block mt-4 text-sm font-headline mb-1">Meta Keywords</label>
        <input
            type="text"
            name="meta_keywords"
            value="{{ old('meta_keywords', $blog->meta_keywords ?? '') }}"
            class="w-full px-3 py-2 border font-body border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-mainCharcoal1"
        />
        <p class="text-xs text-gray-500 mt-1">Separate keywords with commas</p>
    </div>

    {{-- Slug + Publish --}}
    <div class="bg-white p-5 rounded shadow mb-4">
        <label class="block text-sm font-headline mb-1">Slug</label>
        <input
            type="text"
            name="slug"
            value="{{ old('slug', $blog->slug ?? '') }}"
            class="w-full px-3 py-2 mb-2 border font-body border-gray-300 rounded"
        />

        <label class="block text-sm font-headline mb-1 mt-4">Publish Status</label>
        <input type="checkbox" name="publish_status" value="1"
               @if(old('publish_status', $blog->publish_status ?? false)) checked @endif
        />
        <span class="ml-2">Publish this blog</span>

        <div class="grid grid-cols-2 gap-3 mt-4">
            <div>
                <label class="block text-xs text-gray-500 mb-1 font-headline">Publish Date</label>
                <input
                    type="date"
                    name="date"
                    value="{{ old('date', isset($blog->date) ? \Carbon\Carbon::parse($blog->date)->format('Y-m-d') : '') }}"
                    class="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                />
            </div>
        </div>
    </div>
</div>
